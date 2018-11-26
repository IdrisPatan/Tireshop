import React from 'react'
import logo from './logo.svg'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

export const BasicModal = () => (
//     <Modal trigger={<Button as='a' size='large'
//                             style={{backgroundColor: '#b32d00'}}>
//                 Show Modal I am Still Quite Interested!
//             </Button>}
//     >
//         <Modal.Header>Select a Photo</Modal.Header>
//         <Modal.Content image>
//             <Image wrapped size='medium' src="https://www.w3schools.com/images/picture.jpg" />
//             <Modal.Description>
//                 <Header>Default Profile Image</Header>
//                 <p>We've found the following gravatar image associated with your e-mail address.</p>
//                 <p>Is it okay to use this photo?</p>
//             </Modal.Description>
//         </Modal.Content>
//     </Modal>
// )


        <Modal trigger={<Button>Show Modal</Button>} centered={false}>
            <Modal.Header>Select a Photo</Modal.Header>
            <Modal.Content image>
              <Image wrapped size='medium' src={logo} />
              <Modal.Description>
                <Header>Default Profile Image</Header>
                <p>We've found the following gravatar image associated with your e-mail address.</p>
                <p>Is it okay to use this photo?</p>
              </Modal.Description>
            </Modal.Content>
          </Modal>
)