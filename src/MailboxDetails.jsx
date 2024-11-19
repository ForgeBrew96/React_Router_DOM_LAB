import { useParams } from 'react-router-dom'

const MailBoxDetails = ({ mailboxes }) => {
    const { mailboxId } = useParams()

    const selectedMailbox = mailboxes.find(
        (mailbox) => mailbox._id === Number(mailboxId)
    )

    if (!selectedMailbox) {
        return <h2>Mailbox Not Found!</h2>
    }

    return (
        <>
            <h2>{selectedMailbox.boxholder}</h2>
            <dl>
                <dt>Mailbox id:</dt>
                <dd>{selectedMailbox._id}</dd>
                <dt>Mailbox Size:</dt>
                <dd>{selectedMailbox.boxSize}</dd>
            </dl>
        </>
    )
}

export default MailBoxDetails