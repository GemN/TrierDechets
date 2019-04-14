import React from 'react';
import cookie from 'cookie';
import { Mutation } from 'react-apollo';
import Layout from '../../components/Layout';
import { withNamespaces } from '../../../i18n';
import {
  Container,
  ContainerInput,
  Label,
  Input,
  Inputs,
  Content,
} from './style';
import Card from '../../components/UI/Card';
import H1 from '../../components/UI/H1';
import Button from '../../components/UI/Button';
import { SIGN_UP_USER } from '../../constants/graphql/mutation/user';

class Register extends React.PureComponent {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  };

  static async getInitialProps() {
    return {
      namespacesRequired: ['register'],
    };
  }

  onChangeEmail = e => this.setState({ email: e.target.value });

  onChangePassword = e => this.setState({ password: e.target.value });

  onSignUp = async signUpUser => {
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: 'Please fill email and password.' });
    }
    const variables = {
      email,
      password,
    };
    try {
      this.setState({ loading: true });
      const res = await signUpUser({ variables });
      this.setState({ loading: false });
      const { token } = res.data.signupUser;
      document.cookie = cookie.serialize('token', token, {
        maxAge: 30 * 24 * 60 * 60,
      });
      window.location.href = '/browse';
    } catch (e) {
      this.setState({ error: 'An error occured during signup' });
    }
  };

  props: {
    t: Function,
  };

  render() {
    const { error, loading } = this.state;
    const { t } = this.props;
    return (
      <Layout title={t('register-title')}>
        <Container>
          <Card width={400}>
            <Content>
              <H1>{t('register-page-title')}</H1>
              <Inputs>
                <ContainerInput>
                  <Label>{t('register-email')}</Label>
                  <Input
                    placeholder="myemail@gmail.com"
                    onChange={this.onChangeEmail}
                  />
                </ContainerInput>
                <ContainerInput>
                  <Label>{t('register-password')}</Label>
                  <Input
                    placeholder="*******"
                    type="password"
                    onChange={this.onChangePassword}
                  />
                </ContainerInput>
              </Inputs>
              <Mutation mutation={SIGN_UP_USER}>
                {signUpUser => (
                  <Button
                    disabled={loading}
                    onClick={() => this.onSignUp(signUpUser)}
                  >
                    Sign Up
                  </Button>
                )}
              </Mutation>
              {error && <div>{error}</div>}
            </Content>
          </Card>
        </Container>
      </Layout>
    );
  }
}

export default withNamespaces('register')(Register);
