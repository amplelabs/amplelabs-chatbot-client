import { connect } from 'react-redux';
import { addNewMessage } from '../actions';
import ChatWindow from '../components/ChatWindow';

const mapDispatchToProps = dispatch => ({
  addNewMessage: (author, text, attachments) => dispatch(addNewMessage(author, text, attachments))
});

const mapStateToProps = state => ({
  messages: state.chat.messages
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow);
