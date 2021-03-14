import React from 'react'
import {Table,Message} from 'semantic-ui-react'
import RadioButton from '../radiobutton/RadioButton'
const Page3 = () => {
    return (
        <div>
            <Message header='MENTAL HEALTH'/>

            <Table celled>
    <Table.Body>
      <Table.Row  >
        <Table.Cell style={{display:'flex',flexDirection:'row',borderBottom:'0.01rem rgba(34,36,38,0.1) solid'}}>
        Is stress a major problem for you?<RadioButton />
            </Table.Cell>
            <Table.Cell style={{display:'flex',flexDirection:'row',borderBottom:'0.01rem rgba(34,36,38,0.1) solid'}}>
            Do you feel depressed?<RadioButton />
            </Table.Cell>
            <Table.Cell style={{display:'flex',flexDirection:'row',borderBottom:'0.01rem rgba(34,36,38,0.1) solid'}}>
            Do you panic when stressed?<RadioButton />
            </Table.Cell>
            <Table.Cell style={{display:'flex',flexDirection:'row',borderBottom:'0.01rem rgba(34,36,38,0.1) solid'}}>
            Do you have problems with eating or your appetite?<RadioButton />
            </Table.Cell>
            <Table.Cell style={{display:'flex',flexDirection:'row',borderBottom:'0.01rem rgba(34,36,38,0.1) solid'}}>
            Do you cry frequently?<RadioButton />
            </Table.Cell>
            <Table.Cell style={{display:'flex',flexDirection:'row',borderBottom:'0.01rem rgba(34,36,38,0.1) solid'}}>
            Have you ever attempted suicide?<RadioButton />
            </Table.Cell>
            <Table.Cell style={{display:'flex',flexDirection:'row',borderBottom:'0.01rem rgba(34,36,38,0.1) solid'}}>
            Have you ever seriously thought about hurting yourself?<RadioButton />
            </Table.Cell>
            <Table.Cell style={{display:'flex',flexDirection:'row',borderBottom:'0.01rem rgba(34,36,38,0.1) solid'}}>
            Do you have trouble sleeping?<RadioButton />
            </Table.Cell>
            <Table.Cell style={{display:'flex',flexDirection:'row',borderBottom:'0.01rem rgba(34,36,38,0.1) solid'}}>
            Have you ever been to a counselor?<RadioButton />
            </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>

  <Message header='WOMEN ONLY'/>

<Table celled>
<Table.Body>
<Table.Row  >
<Table.Cell style={{display:'flex',flexDirection:'row',borderBottom:'0.01rem rgba(34,36,38,0.1) solid'}}>
Age at onset of menstruation:<RadioButton />
</Table.Cell>
<Table.Cell style={{display:'flex',flexDirection:'row',borderBottom:'0.01rem rgba(34,36,38,0.1) solid'}}>
Date of last menstruation:<RadioButton />
</Table.Cell>
<Table.Cell style={{display:'flex',flexDirection:'row',borderBottom:'0.01rem rgba(34,36,38,0.1) solid'}}>
Period every _____ days<RadioButton />
</Table.Cell>
<Table.Cell style={{display:'flex',flexDirection:'row',borderBottom:'0.01rem rgba(34,36,38,0.1) solid'}}>
Heavy periods, irregularity, spotting, pain, or discharge?<RadioButton />
</Table.Cell>
<Table.Cell style={{display:'flex',flexDirection:'row',borderBottom:'0.01rem rgba(34,36,38,0.1) solid'}}>
Number of pregnancies _____  Number of live births _____<RadioButton />
</Table.Cell>
<Table.Cell style={{display:'flex',flexDirection:'row',borderBottom:'0.01rem rgba(34,36,38,0.1) solid'}}>
Are you pregnant or breastfeeding?<RadioButton />
</Table.Cell>
<Table.Cell style={{display:'flex',flexDirection:'row',borderBottom:'0.01rem rgba(34,36,38,0.1) solid'}}>
Have you had a D&C, hysterectomy, or Cesarean?<RadioButton />
</Table.Cell>
<Table.Cell style={{display:'flex',flexDirection:'row',borderBottom:'0.01rem rgba(34,36,38,0.1) solid'}}>
Any urinary tract, bladder, or kidney infections within the last year?<RadioButton />
</Table.Cell>
<Table.Cell style={{display:'flex',flexDirection:'row',borderBottom:'0.01rem rgba(34,36,38,0.1) solid'}}>
Any problems with control of urination?<RadioButton />
</Table.Cell>
<Table.Cell style={{display:'flex',flexDirection:'row',borderBottom:'0.01rem rgba(34,36,38,0.1) solid'}}>
Any hot flashes or sweating at night?<RadioButton />
</Table.Cell>
<Table.Cell style={{display:'flex',flexDirection:'row',borderBottom:'0.01rem rgba(34,36,38,0.1) solid'}}>
Do you have menstrual tension, pain, bloating, irritability, or other symptoms at or around time of period?<RadioButton />
</Table.Cell>
<Table.Cell style={{display:'flex',flexDirection:'row',borderBottom:'0.01rem rgba(34,36,38,0.1) solid'}}>
Experienced any recent breast tenderness, lumps, or nipple discharge?<RadioButton />
</Table.Cell>
<Table.Cell style={{display:'flex',flexDirection:'row',borderBottom:'0.01rem rgba(34,36,38,0.1) solid'}}>
Date of last pap and rectal exam?<RadioButton />
</Table.Cell>
</Table.Row>
</Table.Body>
</Table>


        </div>
    )
}

export default Page3
