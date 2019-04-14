import React from 'react';
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
import { AUTH_USER } from '../../constants/graphql/mutation/user';

class Login extends React.PureComponent {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  };

  static async getInitialProps() {
    return {
      namespacesRequired: ['login'],
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
      const { token } = res.data.authenticateUser;
      localStorage.setItem('token', token);
      window.location.href = '/browse';
    } catch (e) {
      console.error(e);
      this.setState({ error: 'An error occured during Log-In' });
    }
  };

  props: {
    t: Function,
  };

  render() {
    const { error, loading } = this.state;
    const { t } = this.props;
    return (
      <Layout title={t('login-title')}>
        <Container>
          <Card width={400}>
            <Content>
              <H1>{t('login-page-title')}</H1>
              <Inputs>
                <ContainerInput>
                  <Label>{t('login-email')}</Label>
                  <Input
                    placeholder="myemail@gmail.com"
                    onChange={this.onChangeEmail}
                  />
                </ContainerInput>
                <ContainerInput>
                  <Label>{t('login-password')}</Label>
                  <Input
                    placeholder="*******"
                    type="password"
                    onChange={this.onChangePassword}
                  />
                </ContainerInput>
              </Inputs>
              <Mutation mutation={AUTH_USER}>
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

export default withNamespaces('login')(Login);
