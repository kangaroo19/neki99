import { Button, Modal } from '@mui/material'
import * as React from 'react'

export default function ModalCustom({ modalTrigger, modal }) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Button onClick={handleOpen}>123</Button>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        ddd
      </Modal>
    </div>
  )
}
