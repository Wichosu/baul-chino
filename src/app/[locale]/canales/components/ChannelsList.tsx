import { IChannel } from "../interfaces/IChannel"
import Channel from "./Channel"

type Props = {
  dataChannel: IChannel[]
}

export default function ChannelsList({ dataChannel }: Props) {
  return (
    <>
      {
        dataChannel.map((channel) => (
          <Channel key={channel.id} channel={channel} />
        ))
      }
    </>
  )
}