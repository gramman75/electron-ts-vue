<template>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          {{ newMessage }}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" v-on:click="cb">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import _ from 'lodash'

@Component
export default class Modal extends Vue{
  @Prop({
    type: String, 
    required: true, 
    validator: function(v) {
      
      return !_.isEmpty(v)
      } 
    }) newMessage!: string 
  @Prop() cb!: Function 

}
</script>
