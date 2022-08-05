import type { PropType } from 'vue'
import type { tagType, tagSize } from './interface'

export const Props = {
  type: {
    type: String as PropType<tagType>,
    default: (): tagType => 'info',
    validator: (val: tagType): boolean => {
      return (['info', 'success', 'danger', 'warning', 'primary'] as const).includes(val)
    }
  },
  closable: {
    type: Boolean,
    default: (): boolean => false
  },
  round: {
    type: String,
    default: (): string => '0px'
  },
  color: {
    type: String,
    default: (): string => ''
  },
  size: {
    type: String as PropType<tagSize>,
    default: (): tagSize => 'small',
    validator: (val: tagSize): boolean => {
      return (['large', 'middle', 'small', 'mini'] as const).includes(val)
    }
  }
} as const

export const Emits = {
  close: (evt: Event): Event => evt
} as const
