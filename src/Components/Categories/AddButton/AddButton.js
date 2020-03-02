import React, { Component } from 'react';
import './AddButton.scss';
import Modal from 'react-modal';
import { callApi } from '../../../Helpers';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const emptyEntity = (id) => {
  return {
    id,
    parent: '',
    title: '',
    image: '',
    description: '',
    rate: 0,
    location: '',
    createdAt: new Date().getTime(),
  };
};

const AddButton = ({ createEntity }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [elementData, setElementData] = React.useState(
    emptyEntity(
      Math.random()
        .toString(36)
        .substr(2, 9)
    )
  );

  const setData = (data) => {
    setElementData({ ...elementData, ...data });
  };

  const send = () => {
    createEntity({ variables: { ...elementData } });
    setIsModalOpen(false);
    setElementData(
      emptyEntity(
        Math.random()
          .toString(36)
          .substr(2, 9)
      )
    );
  };

  return (
    <div className="AddButton_page_container">
      <div>
        <div className="titre">City Guide</div>
        <div className="rectangle">
          <img className="add" src="img/plus_btn.png" onClick={() => setIsModalOpen(true)} />
          <div className="add_categorie">ADD CATEGORIE</div>
          <Modal
            id="Modal_popup"
            isOpen={isModalOpen}
            onAfterOpen={() => {}}
            onRequestClose={() => setIsModalOpen(false)}
            style={customStyles}
            contentLabel="Example Modal"
            overlayClassName="Overlay"
          >
            <div className="part1">
              <div className="title_Modal">Title</div>
              <input
                type="text"
                className="input_modal"
                placeholder="Title"
                value={elementData.title || ''}
                onChange={(e) => setData({ title: e.target.value })}
              />
              <div className="modal_url">Url Image</div>
              <input
                type="text"
                className="img_url"
                placeholder="put the url here"
                onChange={(e) => {
                  setData({ image: e.target.value });
                }}
              />
              <div className="title_descr">Description</div>
              <textarea
                className="descr_modal"
                onChange={(e) => setData({ location: e.target.value })}
                value={elementData.location}
              />
            </div>

            <div className="can_app">
              <img className="cancel" src="img/cancel.png" onClick={() => setIsModalOpen(false)} />
              <img className="approve" src="img/approve.png" onClick={send} />
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default AddButton;
