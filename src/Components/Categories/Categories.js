import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { pathOr } from 'ramda';

import './Categories.scss';
import Header from '../Header/Header.js';
import Sidebar from '../Sidebar/Sidebar.js';
import Guide from './Guide/Guide';
import AddButton from './AddButton/AddButton';
import { entityFragment } from '../../utils/fragments';
import confirmBox from '../ConfirmBox';

export const getEntities = gql`
  query allEntities($filter: EntityFilter, $sortField: String, $sortOrder: String) {
    allEntities(filter: $filter, sortField: $sortField, sortOrder: $sortOrder) {
      ...EntityFragment
    }
  }
  ${entityFragment}
`;

export const removeEntityMutation = gql`
  mutation removeEntity($id: ID!) {
    removeEntity(id: $id)
  }
`;

export const createEntityMutation = gql`
  mutation createEntity(
    $id: ID!
    $parent: String!
    $title: String!
    $image: String!
    $description: String!
    $rate: Int!
    $location: String!
    $createdAt: String!
  ) {
    createEntity(
      id: $id
      parent: $parent
      title: $title
      image: $image
      description: $description
      rate: $rate
      location: $location
      createdAt: $createdAt
    ) {
      ...EntityFragment
    }
  }
  ${entityFragment}
`;

const Categories = () => {
  const [idToBeRemoved, setIdToBeRemoved] = React.useState('');

  const { loading, data: entitiesData } = useQuery(getEntities, {
    variables: { filter: { parent: '' }, sortField: 'createdAt', sortOrder: 'desc' },
  });
  const [createEntity] = useMutation(createEntityMutation, {
    update(cache, { data }) {
      cache.writeQuery({
        query: getEntities,
        variables: { filter: { parent: '' }, sortField: 'createdAt', sortOrder: 'desc' },
        data: {
          allEntities: [data.createEntity, ...entities],
        },
      });
    },
  });

  const [removeEntity] = useMutation(removeEntityMutation, {
    update(cache, { data }) {
      cache.writeQuery({
        query: getEntities,
        variables: { filter: { parent: '' }, sortField: 'createdAt', sortOrder: 'desc' },
        data: {
          allEntities: [...entities.filter((entity) => entity.id !== idToBeRemoved)],
        },
      });
    },
  });

  const entities = pathOr([], ['allEntities'], entitiesData);

  const deleteEntity = (id) => {
    setIdToBeRemoved(id);
    confirmBox({
      title: 'Delete Action',
      message: 'Confirm delete category ?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            removeEntity({ variables: { id } });
          },
        },
        {
          label: 'No',
          onClick: () => null,
        },
      ],
    });
  };
  return (
    <div className="Categories_page_container">
      <div className="all-categories">
        <AddButton createEntity={createEntity} />
        {!loading &&
          entities.map((entity, index) => {
            return <Guide key={index} post={entity} onDelete={deleteEntity} />;
          })}
      </div>
    </div>
  );
};

export default Categories;
