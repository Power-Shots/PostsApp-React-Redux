import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createPost, showAlert} from '../../redux/actions';
import Alert from '../Alert/Alert';

 class PostForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: ''
    }
    this.submitHandler = this.submitHandler.bind(this);
    this.changeInputHandler = this.changeInputHandler.bind(this)
  }

  submitHandler(e) {
    e.preventDefault()
    const {title} = this.state

    if(title.trim() === ''){
      return this.props.showAlert('Название поста не может быть пустым')
    }

    const newPost = {
      title: title,
      id: Date.now().toString()
    }

    console.log(newPost)
    this.props.createPost(newPost)
    this.setState({...this.state, title: ''})
  }

  changeInputHandler = (event) =>{
    event.persist()
    this.setState((prev)=> ({...prev, ...{
      [event.target.name]: event.target.value
    }}))
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        {this.props.alert
        ? <Alert text={this.props.alert}/>
        : ''}
        
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Заголовок поста</label>
          <input 
            type="text" 
            className="form-control"
            id="title"
            value={this.state.title}
            name="title"
            onChange={this.changeInputHandler} />
        </div>
        <button className={`btn btn-success`} type="submit">Создать</button>
      </form>
    )
  }
}
const mapDispatchToProps = {
  createPost, showAlert
}

const mapStateToProps = (state) => ({
  alert: state.app.alert
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)