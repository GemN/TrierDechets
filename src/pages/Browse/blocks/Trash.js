import React from 'react';
import {
  Container,
  TrashIcon,
  Infos,
  ContainerTrashType,
  Address,
  Type,
  Fill,
  FillLabel,
  FavIcon,
} from './Trash.style';
import { withNamespaces } from '../../../../i18n';

type Props = {
  $hover: Boolean,
  trash: {},
  t: Function,
  isActive: boolean,
  onClick: Function,
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
    label: 'CB',
    color: '#7A4F66',
  },
};

const Trash = (props: Props) => {
  const { trash, $hover, t, onClick, isActive, isFav } = props;
  const {
    wastetype_designation: type,
    fillingrate,
    localisationfo_street: address,
  } = trash.fields;
  const trashObj = trashTypes[type] || trashTypes.CB;
  return (
    <Container onClick={() => onClick(trash.recordid)}>
      {($hover || isActive) && (
        <Infos>
          <ContainerTrashType>
            <TrashIcon color={trashObj.color}>
              <i className="fas fa-trash" />
            </TrashIcon>
            <Type>{t(trashObj.label)}</Type>
            <FavIcon>
              {isFav ? (
                <i className="fas fa-heart" />
              ) : (
                <i className="far fa-heart" />
              )}
            </FavIcon>
          </ContainerTrashType>
          <Fill>
            <FillLabel>{t('fill')}:</FillLabel>
            {fillingrate}%
          </Fill>
          <Address>{address}</Address>
        </Infos>
      )}
      <TrashIcon color={trashObj.color}>
        <i className="fas fa-trash" />
      </TrashIcon>
    </Container>
  );
};

export default withNamespaces('browse')(Trash);
