import React, { useState } from 'react';
import './comment-section.css';

interface Comment {
  name: string;
  text: string;
}

export const CommentSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [comments, setComments] = useState<Comment[]>([
    {
      name: 'Bob Fossil',
      text: 'Oh I am so glad you taught me all about the big brown angry guys...',
    },
  ]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const getInitials = (fullName: string) => {
    const [first, second] = fullName.trim().split(' ');
    return `${first?.[0] ?? ''}${second?.[0] ?? ''}`.toUpperCase();
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name.trim() && comment.trim()) {
      const newComment: Comment = {
        name: name,
        text: comment,
      };

      console.log(`New comment from ${name}: ${comment}`);

      setComments([...comments, newComment]);
      setName('');
      setComment('');
    }
  };

  return (
    <section className="comments">
      <div className="comments__toggle">
        <button
          className="show-hide"
          onClick={toggleVisibility}
          aria-expanded={isVisible}
          aria-controls="comment-panel"
          type="button"
        >
          {isVisible ? 'Hide comments' : 'Show comments'}
        </button>
      </div>

      {isVisible && (
        <div className="comment-wrapper" id="comment-panel">
          <div className="comment-card comment-card--form">
            <h2>Add comment</h2>
            <form className="comment-form" onSubmit={handleSubmit}>
              <div className="flex-pair">
                <label htmlFor="name">Your name:</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex-pair">
                <label htmlFor="comment">Your comment:</label>
                <input
                  type="text"
                  name="comment"
                  id="comment"
                  placeholder="Enter your comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>
              <div className="comment-actions">
                <input
                  type="submit"
                  value="Submit comment"
                  className="comment-submit"
                />
              </div>
            </form>
          </div>

          <div className="comment-card comment-card--list">
            <h2>Comments</h2>
            <ul className="comment-container">
              {comments.map((comment, index) => (
                <li key={index} className="comment-item">
                  <div className="comment-avatar" aria-hidden="true">
                    {getInitials(comment.name)}
                  </div>
                  <div className="comment-body">
                    <p className="comment-name">{comment.name}</p>
                    <p className="comment-text">{comment.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};
