import React from 'react';
import { Container, TrashIcon, Infos } from './Trash.style';
import { withNamespaces } from '../../../../i18n';

type Props = {
  $hover: Boolean,
  trash: {},
  t: Function,
};

const trashTypes = {
  'Can / Plastic': {
    label: 'Plastic',
    color: '#fde358',
  },
  Glass: {
    label: 'Glass',
    color: '#696969',
  },
  CB: {
    label: 'All',
    color: '#7A4F66',
  },
};

const Trash = (props: Props) => {
  const { trash, $hover, t } = props;
  const {
    wastetype_designation: type,
    fillingrate,
    localisationfo_street: address,
  } = trash.fields;
  const trashObj = trashTypes[type] || trashTypes.CB;
  return (
    <Container>
      {$hover && (
        <Infos>
          <div>
            <TrashIcon color={trashObj.color}>
              <i className="fas fa-trash" />
            </TrashIcon>
            <span>{t(trashObj.label)}</span>
          </div>
          <div>{address}</div>
          <div>
            Remplissage:
            {fillingrate}%
          </div>
        </Infos>
      )}
      <TrashIcon color={trashObj.color}>
        <i className="fas fa-trash" />
      </TrashIcon>
    </Container>
  );
};

export default withNamespaces('browse')(Trash);
