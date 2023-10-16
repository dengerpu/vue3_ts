import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    reverse: {
      type: Boolean,
      default: true
    }
  },
  setup (props) {
    console.log('TimeLine执行了')
    const timeline = [
      <div class="start">8.21 开始自由职业</div>,
      <div class="online">10.18 专栏上线</div>
    ]
    if (props.reverse) {
      timeline.reverse()
    }
    return () => <div>{timeline}</div>
  }
})
