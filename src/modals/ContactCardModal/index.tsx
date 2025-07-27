'use client'
import React, {CSSProperties, FC, ReactElement} from 'react'
import {useRouter} from 'next/navigation'
import ContactCardView from '@/components/ContactCardView'
import Modal from '@/components/Modal'
import ModalOverlay from '@/components/ModalOverlay'

type Props = {
  style?: CSSProperties
}

const ContactCardModal: FC<Props> = (props: Props): ReactElement => {
  const {style} = props
  const router = useRouter()

  const onBack = async (): Promise<void> => {
    router.back()
  }

  return (
    <ModalOverlay style={{...style}} onClick={onBack}>
      <Modal>
        <ContactCardView style={style} />
      </Modal>
    </ModalOverlay>
  )
}

export default ContactCardModal
