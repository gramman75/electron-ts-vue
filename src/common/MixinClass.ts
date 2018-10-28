import  { Mixins, Component, Vue } from "vue-property-decorator";

@Component
export default class MixinClass extends Vue{
    created() {
        console.log('mxin created')
    }    

    protected foo() {
        console.log('foo')
    }

    conflicting() {
        console.log('from mixin')
    }
}
