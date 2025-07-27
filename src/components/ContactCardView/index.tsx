import React, {FC, HTMLAttributes, ReactElement} from 'react'
import Image from 'next/image'
import {ScanQrCode} from 'lucide-react'
import PrimaryLink from '@/components/PrimaryLink'

type Props = {
  //style?: CSSProperties
} & HTMLAttributes<HTMLDivElement> // TODO i want structures like this

const ContactCardView: FC<Props> = (props: Props): ReactElement => {
  const {style, ...rest} = props

  return (
    <div
      style={{
        ...style,
        width: 470,
        backgroundColor: '#FBFBFB',
        borderRadius: 8,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 20,
        paddingTop: 70,
        paddingBottom: 40
      }}
      {...rest}
    >
      <div
        style={{
          width: 86,
          height: 86,
          backgroundColor: '#FBFBFB',
          position: 'absolute',
          top: -30,
          borderRadius: '50%',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          border: '1px solid #D3D3D3'
        }}
      >
        <div
          style={{
            width: 78,
            height: 78,
            borderRadius: '50%',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            border: '1px solid #D3D3D3'
          }}
        >
          <ScanQrCode size={40} color={'#4041cb'} />
        </div>
      </div>
      <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <p style={{fontSize: 24, fontWeight: '600'}}>Scan QR to connect</p>
        <p style={{fontSize: 16, fontWeight: '400'}}>Scan this QR code to add contact information</p>
      </div>
      <Image style={{border: '1px solid #D3D3D3', borderRadius: 8}} src="/qr.png" width={200} height={200} alt="Picture of the author" />
      <PrimaryLink caption={'Open in browser'} href="https://smartcards.pro/WHqgNX" target="_blank" />
    </div>
  )
}

export default ContactCardView
//https://smartcards.pro/WHqgNX
