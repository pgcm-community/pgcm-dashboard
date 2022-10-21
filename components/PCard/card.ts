const Props = {
  isAside: {
    type: Boolean,
    default: false
  },
  avatar: {
    type: String,
    default: (): string => ''
  },
  image: {
    type: String,
    default: (): string => ''
  },
  padding: {
    type: String,
    default: (): string => ''
  },
  border: {
    type: String,
    default: (): string => ''
  },
  shadow: {
    type: Boolean,
    default: false
  },
  angle: {
    type: Boolean,
    default: false
  }
}

export default Props
