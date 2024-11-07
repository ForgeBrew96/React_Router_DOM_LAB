import { Link } from "react-router-dom"

const MailboxList= ({ mailboxes }) => {
    return(
        <>
        <h1>MailboxList</h1>
        <ul>
            {mailboxes.map((selectedMailbox) => (
                <li key={selectedMailbox._id}>
                    <Link to={`/mailboxes/${selectedMailbox._id}`}>Mailbox{selectedMailbox._id}</Link>
                </li>
            ))}
        </ul>
        </>
    )
}

export default MailboxList