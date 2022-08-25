import { MdDeleteForever } from 'react-icons/md';
import Like from "../../images/Like.png";
import Comment from "../../images/Comment.png";

const Note = ({ id, text, date, handleDeleteNote }) => {
	return (
		<div className='note'>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
			<div className="reaction">
                  <img src={Like} alt="like" />
                  <img src={Comment} alt="Comment" />
                </div>
		</div>
	);
};

export default Note;