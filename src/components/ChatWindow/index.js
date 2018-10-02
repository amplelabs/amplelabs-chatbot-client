import React, { Component, Fragment } from 'react';
import { Interactions } from 'aws-amplify';
import Message from './Message';
import MessageList from './MessageList';
import MessageInputForm from './MessageInputForm';
import MainContainer from './MainContainer';

class ChatWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageText: ''
    };
  }

  async submitMessage(e) {
    e.preventDefault();
    this.props.addNewMessage('user', this.state.messageText);
    this.setState({ messageText: '' });
    const res = await Interactions.send('AmplelabsBot', this.state.messageText);
    this.props.addNewMessage(
      'bot',
      res.message,
      res.responseCard ? res.responseCard.genericAttachments : null
    );
  }

  renderAttachments(author, attachments) {
    return attachments
      ? attachments.map(attachment => (
          <Message author={author}>
            {attachment.imageUrl ? (
              <img
                style={{ width: '100%' }}
                src={attachment.imageUrl}
                alt="Map"
              />
            ) : null}
          </Message>
        ))
      : null;
  }

  render() {
    return (
      <MainContainer>
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
        <MessageInputForm onSubmit={e => this.submitMessage(e)}>
          <input
            type="text"
            value={this.state.messageText}
            placeholder="Type a message"
            onChange={e => this.setState({ messageText: e.target.value })}
          />
          <button>Submit</button>
        </MessageInputForm>
      </MainContainer>
    );
  }
}

export default ChatWindow;
