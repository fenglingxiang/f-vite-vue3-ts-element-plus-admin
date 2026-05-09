import type { PropType, VNode } from 'vue';

export type ColumnRenderFunction<T = any> = (params: {
  row: T;
  column: any;
  prop: string;
}) => VNode | string | number | null;

export default defineComponent({
  name: 'Render',
  props: {
    render: {
      type: Function as PropType<ColumnRenderFunction>,
      required: true,
    },

    row: {
      type: Object as PropType<Record<string, any>>,
      default: () => ({}),
    },

    column: {
      type: Object,
      default: () => ({}),
    },

    prop: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    return () => {
      return props.render({
        row: props.row,
        column: props.column,
        prop: props.prop,
      });
    };
  },
});
