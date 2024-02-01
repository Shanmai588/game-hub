import { Badge, Text } from '@chakra-ui/react'
interface Props {
  score: number
}
const CriticScore = ({score}: Props) => {
  let color = 'green';
  if (score < 80) {
    color = 'yellow'
  }
  else if (score < 60) {
    color = 'red'
  }
  return (
    <Badge borderRadius='5px' fontSize={'14px'} paddingX={2} colorScheme={color}>{score} </Badge>
  )
}

export default CriticScore