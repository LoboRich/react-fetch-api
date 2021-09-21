import React, {useState} from "react";



const Form = ({userID}) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {userID: userID, title: title, body: body}
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            },
            }).then(function(response){
                console.log(response)
                alert('Form submitted')
                return response.json();
            });
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Create Post</h3>
                <div>
                    <input type='text' name='title' placeholder='Input Title' onChange={event => setTitle(event.target.value)} value={title}/>
                </div>

                <div>
                    <textarea type='text' name='body' placeholder='Input Body' onChange={event => setBody(event.target.value)} value={body}></textarea>
                </div>

                <div>
                    <input type='submit' value='submit'/>
                </div>
            </form>
        </div>
    )
}

export default Form;