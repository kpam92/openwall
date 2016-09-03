import React from 'react';
import Modal from 'react-modal';
import ModalStyle from './modal_style'
class PhotoIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
    this.onModalClose = this.onModalClose.bind(this)
    this.onModalOpen = this.onModalOpen.bind(this)
  }

  onModalClose(){
    this.setState({modalOpen: false});
    ModalStyle.content.opacity = 0;
  }
  onModalOpen(){
    ModalStyle.content.opacity = 100;
    ModalStyle.content.background
  }

  _handleClick() {
    this.setState({ modalOpen: true});
  }

  componentDidMount(){
    // this.props.fetchSingleUser(this.props.photo.author_id);
  }


  render() {
    const author = (id) => {
      let result = ''
      this.props.props.user.map(x => {
        if (id === x.id) {
          result = x.profile_pic;
        }
      })
      return result;
    }
    return(
      <li>
        <a className="photo-grid">
        <img src={this.props.photo.image_url} onClick={this._handleClick.bind(this)}/>
        </a>
        <div className="auth">
        <h3>{this.props.photo.title}</h3>
        <h5>{this.props.photo.description}</h5>
        <img src={author(this.props.photo.author_id)}/></div>

          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.onModalClose}
            style={ModalStyle}
            onAfterOpen={this.onModalOpen}>
            <a className="modal-close" onClick={this.onModalClose}><img src="http://res.cloudinary.com/dt5viyxyq/image/upload/c_scale,h_41/v1472778565/x_alt-128_p7d2vo.png"/></a>

            <div className='modal-container'>
              <img src={this.props.photo.image_url}/>
            </div>

          </Modal>

      </li>
      )
    }
  }

export default PhotoIndexItem;
