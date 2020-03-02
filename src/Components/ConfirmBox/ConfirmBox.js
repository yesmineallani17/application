import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

const ReactConfirmAlert = ({
  title = '',
  message = 'Confirm action?',
  buttons = [
    {
      label: 'Cancel',
      onClick: () => null,
    },
    {
      label: 'Confirm',
      onClick: () => null,
    },
  ],
  childrenElement = () => null,
  onKeypressEscape = () => {},
  closeOnEscape = true,
}) => {
  const handleClickButton = (button) => {
    if (button.onClick) button.onClick();
    close();
  };

  const close = () => {
    removeBodyClass();
    removeElementReconfirm();
    removeSVGBlurReconfirm();
  };

  const keyboardClose = (event) => {
    const isKeyCodeEscape = event.keyCode === 27;

    if (closeOnEscape && isKeyCodeEscape) {
      onKeypressEscape();
      close();
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', keyboardClose, false);
    return document.removeEventListener('keydown', keyboardClose, false);
  }, [keyboardClose]);

  return (
    <div className="react-confirm-alert-overlay">
      <div className="react-confirm-alert">
        <div className="react-confirm-alert-body">
          {title && <h1>{title}</h1>}
          {message}
          {childrenElement()}
          <div className="react-confirm-alert-button-group">
            {buttons.map((button, i) => (
              <img
                className={button.label}
                src={button.label === 'No' ? 'img/cancel.png' : 'img/approve.png'}
                alt={button.label === 'No' ? 'img/cancel.png' : 'img/approve.png'}
                key={i}
                onClick={() => handleClickButton(button)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

function createSVGBlurReconfirm() {
  // If has svg ignore to create the svg
  const svg = document.getElementById('react-confirm-alert-firm-svg');
  if (svg) return;
  const svgNS = 'http://www.w3.org/2000/svg';
  const feGaussianBlur = document.createElementNS(svgNS, 'feGaussianBlur');
  feGaussianBlur.setAttribute('stdDeviation', '0.3');

  const filter = document.createElementNS(svgNS, 'filter');
  filter.setAttribute('id', 'gaussian-blur');
  filter.appendChild(feGaussianBlur);

  const svgElem = document.createElementNS(svgNS, 'svg');
  svgElem.setAttribute('id', 'react-confirm-alert-firm-svg');
  svgElem.setAttribute('class', 'react-confirm-alert-svg');
  svgElem.appendChild(filter);

  document.body.appendChild(svgElem);
}

function removeSVGBlurReconfirm() {
  const svg = document.getElementById('react-confirm-alert-firm-svg');
  if (svg !== null && svg.parentNode !== null) {
    svg.parentNode.removeChild(svg);
  }
  document.body.children[0].classList.remove('react-confirm-alert-blur');
}

function createElementReconfirm(properties) {
  let divTarget = document.getElementById('react-confirm-alert');
  if (divTarget) {
    // Rerender - the mounted ReactConfirmAlert
    render(<ReactConfirmAlert {...properties} />, divTarget);
  } else {
    // Mount the ReactConfirmAlert component
    document.body.children[0].classList.add('react-confirm-alert-blur');
    divTarget = document.createElement('div');
    divTarget.id = 'react-confirm-alert';
    document.body.appendChild(divTarget);
    render(<ReactConfirmAlert {...properties} />, divTarget);
  }
}

function removeElementReconfirm() {
  const target = document.getElementById('react-confirm-alert');
  unmountComponentAtNode(target);
  if (target.parentNode !== null) {
    target.parentNode.removeChild(target);
  }
}

function addBodyClass() {
  document.body.classList.add('react-confirm-alert-body-element');
}

function removeBodyClass() {
  document.body.classList.remove('react-confirm-alert-body-element');
}

export default function confirmBox(properties) {
  addBodyClass();
  createSVGBlurReconfirm();
  createElementReconfirm(properties);
}
