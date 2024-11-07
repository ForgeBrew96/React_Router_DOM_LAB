import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const blankForm = {
    _id: 0,
    boxSize: "",
    boxHolder: "",
}

const MailBoxForm = ({ addbox }) => {
    const [formData, setFormData] = useState(blankForm);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        addbox(formData)
        setFormData(blankForm)
        navigate('/mailboxes');
    };

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
    };

    return (
        <main>
            <h2>New Mailbox</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxholder">boxholder:</label>
                <input
                    type="text"
                    id="boxSize"
                    name="boxholder"
                    value={formData.boxholder}
                    onChange={handleChange}
                />
                <label htmlFor="boxSize">boxSize(ex. small, medium, large):</label>
                <input
                    type="text"
                    id="boxSize"
                    name="boxSize"
                    value={formData.boxSize}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </main>
    )
}

export default MailBoxForm