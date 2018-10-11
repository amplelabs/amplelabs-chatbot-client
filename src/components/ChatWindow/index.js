import React, { Component, Fragment } from 'react';
import { Interactions } from 'aws-amplify';
import Message from './Message';
import Header from './Header';
import MessageInputForm from './MessageInputForm';
import MainContainer from './MainContainer';
import styled from 'styled-components';
import { theme } from '../../style/Variables.js';

const MessageList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 0 auto;
  list-style: none;
  padding: 0;
  flex-grow: 1;
  .options {
    align-self: ${props =>
      props.author === 'user' ? 'flex-end' : 'flex-start'};
    button {
      padding: 12px 22px;
      border: 1px solid ${theme.red};
      color: ${theme.red};
      background: none;
      border-radius: 30px;
      margin: 0.25rem 0.75rem 1rem 0;
      &:hover {
        background: ${theme.red};
        color: white;
      }
    }
  }
`;

class ChatWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageText: ''
    };
  }

  handleAttachmentButtonClick(e, button) {
    e.preventDefault();
    this.sendMessage(button.value);
  }

  handleTextChange = e => this.setState({ messageText: e.target.value });

  submitMessage = e => {
    e.preventDefault();
    this.sendMessage(this.state.messageText);
    this.setState({ messageText: '' });
  };

  async sendMessage(text) {
    this.props.addNewMessage('user', text);
    const res = await Interactions.send('AmplelabsBot', text);
    this.props.addNewMessage(
      'bot',
      res.message,
      res.responseCard ? res.responseCard.genericAttachments : null
    );
  }

  renderAttachments(author, attachments) {
    return attachments
      ? attachments.map(attachment => (
          <li className="options" author={author}>
            {attachment.imageUrl && (
              <img
                style={{ width: '100%' }}
                src={attachment.imageUrl}
                alt="Map"
              />
            )}
            {attachment.buttons &&
              attachment.buttons.map(attachmentButton => (
                <button
                  onClick={e =>
                    this.handleAttachmentButtonClick(e, attachmentButton)
                  }>
                  {attachmentButton.text}
                </button>
              ))}
          </li>
        ))
      : null;
  }

  render() {
    return (
      <MainContainer>
        <Header />
        <MessageList>
          {this.props.messages.map((message, index) => {
            return (
              <Fragment>
                <Message key={index} author={message.author}>
                  {message.text}
                </Message>
                {this.renderAttachments(message.author, message.attachments)}
              </Fragment>
            );
          })}
        </MessageList>
        <MessageInputForm
          onSubmit={this.submitMessage}
          onChange={this.handleTextChange}
          messageValue={this.state.messageText}
        />
      </MainContainer>
    );
  }
}

export default ChatWindow;
