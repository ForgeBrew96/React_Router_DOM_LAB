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
                <label htmlFor="boxSize">Box Size</label>
                <select
                    id="boxSize"
                    name="boxSize"
                    value={formData.boxSize}
                    onChange={handleChange}
                    >
<option value ="">Select a size</option>
<option value ="small">small</option>
<option value ="medium">medium</option>
<option value ="large">large</option>
                    </select>
                <button type="submit">Submit</button>
            </form>
        </main>
    )
}

export default MailBoxForm