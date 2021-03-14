import React from 'react'
import {Form,Table,Message} from 'semantic-ui-react'
import RadioButton from '../radiobutton/RadioButton'
const Page3 = () => {
    return (
        <div>
            <Message header='MENTAL HEALTH'/>

            <Table celled>
    <Table.Body>
      <Table.Row  >
        <Table.Cell style={{display:'flex',flexDirection:'row'}}>
        Is stress a major problem for you?<RadioButton />
            </Table.Cell>
            <Table.Cell style={{display:'flex',flexDirection:'row'}}>
            Do you feel depressed?<RadioButton />
            </Table.Cell>
            <Table.Cell style={{display:'flex',flexDirection:'row'}}>
            Do you panic when stressed?<RadioButton />
            </Table.Cell>
            <Table.Cell style={{display:'flex',flexDirection:'row'}}>
            Do you have problems with eating or your appetite?<RadioButton />
            </Table.Cell>
            <Table.Cell style={{display:'flex',flexDirection:'row'}}>
            Do you cry frequently?<RadioButton />
            </Table.Cell>
            <Table.Cell style={{display:'flex',flexDirection:'row'}}>
            Have you ever attempted suicide?<RadioButton />
            </Table.Cell>
            <Table.Cell style={{display:'flex',flexDirection:'row'}}>
            Have you ever seriously thought about hurting yourself?<RadioButton />
            </Table.Cell>
            <Table.Cell style={{display:'flex',flexDirection:'row'}}>
            Do you have trouble sleeping?<RadioButton />
            </Table.Cell>
            <Table.Cell style={{display:'flex',flexDirection:'row'}}>
            Have you ever been to a counselor?<RadioButton />
            </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>

  <Message header='WOMEN ONLY'/>

<Table celled>
<Table.Body>
<Table.Row  >
<Table.Cell style={{display:'flex',flexDirection:'row'}}>
Age at onset of menstruation:<RadioButton />
</Table.Cell>
<Table.Cell style={{display:'flex',flexDirection:'row'}}>
Date of last menstruation:<RadioButton />
</Table.Cell>
<Table.Cell style={{display:'flex',flexDirection:'row'}}>
Period every _____ days<RadioButton />
</Table.Cell>
<Table.Cell style={{display:'flex',flexDirection:'row'}}>
Heavy periods, irregularity, spotting, pain, or discharge?<RadioButton />
</Table.Cell>
<Table.Cell style={{display:'flex',flexDirection:'row'}}>
Number of pregnancies _____  Number of live births _____<RadioButton />
</Table.Cell>
<Table.Cell style={{display:'flex',flexDirection:'row'}}>
Are you pregnant or breastfeeding?<RadioButton />
</Table.Cell>
<Table.Cell style={{display:'flex',flexDirection:'row'}}>
Have you had a D&C, hysterectomy, or Cesarean?<RadioButton />
</Table.Cell>
<Table.Cell style={{display:'flex',flexDirection:'row'}}>
Any urinary tract, bladder, or kidney infections within the last year?<RadioButton />
</Table.Cell>
<Table.Cell style={{display:'flex',flexDirection:'row'}}>
Any problems with control of urination?<RadioButton />
</Table.Cell>
<Table.Cell style={{display:'flex',flexDirection:'row'}}>
Any hot flashes or sweating at night?<RadioButton />
</Table.Cell>
<Table.Cell style={{display:'flex',flexDirection:'row'}}>
Do you have menstrual tension, pain, bloating, irritability, or other symptoms at or around time of period?<RadioButton />
</Table.Cell>
<Table.Cell style={{display:'flex',flexDirection:'row'}}>
Experienced any recent breast tenderness, lumps, or nipple discharge?<RadioButton />
</Table.Cell>
<Table.Cell style={{display:'flex',flexDirection:'row'}}>
Date of last pap and rectal exam?<RadioButton />
</Table.Cell>
</Table.Row>
</Table.Body>
</Table>


        </div>
    )
}

export default Page3
