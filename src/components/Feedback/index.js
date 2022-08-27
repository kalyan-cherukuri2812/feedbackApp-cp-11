import './index.css'

import {Component} from 'react'

class Feedback extends Component {
  state = {feedback: false}

  feedbackSubmit = () => {
    this.setState({feedback: true})
  }

  render() {
    const {feedback} = this.state
    const {resources} = this.props
    const {emojis} = resources
    const {loveEmojiUrl} = resources
    return (
      <div className="bg-container">
        {feedback === false ? (
          <>
            <h1 className="heading">Feedback Question</h1>
            <div className="bg-card">
              <div className="card">
                <h1 className="para">
                  How satisfied are you with our customer support performance?
                </h1>
                <div className="emoji-card">
                  {emojis.map(each => (
                    <li key={each.id} className="emoji">
                      <button
                        className="button"
                        type="button"
                        onClick={this.feedbackSubmit}
                      >
                        <img
                          className="images"
                          src={each.imageUrl}
                          alt={each.name}
                        />
                        <p>{each.name}</p>
                      </button>
                    </li>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 className="heading">Thank You</h1>
            <div className="bg-card">
              <div className="card-2">
                <div className="submit-img-card">
                  <img alt="love emoji" className="images" src={loveEmojiUrl} />
                  <h1 className="submit-h">Thank You</h1>
                </div>
                <p className="para-2">
                  We Will use Your feedback to improve our customer support
                  performance.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    )
  }
}

export default Feedback
