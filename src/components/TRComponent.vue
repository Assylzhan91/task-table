<script>
import VBtn from './VBtn'
import { dotFormatNums } from '../util/index'
import minus from '../assets/images/icons/minus-square-solid.svg'
import plus from '../assets/images/icons/plus-square-solid.svg'
import { mapActions } from 'vuex'
export default {
  name: 'TRComponent',
	data: ()=>({
    open: false,
	}),
	components: {
    VBtn
  },
  props: {
    rows: {
      type: Object
    },
    remove: String,
    add: String,
    mrClass: String,
    addClass: String,
    removeClass: String,
    classNames: String,
  },

  methods: {
    ...mapActions([
      'getDataAction'
		]),
    toggle: function (id) {
      this.open = !this.open;
		},
		removeCount(id){
      this.$store.dispatch('removeAction', id)
		},
		addCount(id){
      this.$store.dispatch('addAction', id)
		}
  },
  render(h) {

    if(this.rows) {
      return (
        <tr>
					<td colSpan="42" >
						<table>
							<tr>
								<td class={'d-flex align-items-center'}>
									<button class={'button'} onClick={()=>this.toggle(this.rows.id)}>
                    {this.rows.children
											? <img src={this.open ? minus : plus} alt="MINUS"/>
											: null
                    }
									</button>
									<strong>{dotFormatNums(this.rows.id)}</strong>
                </td>
								<td>{this.rows.title}</td>
                <td>{this.rows.price}</td>
								<td>{this.rows.count}</td>
								<td>{this.rows.price * this.rows.count}</td>
								<td>
									<button
										class={'btn btn-danger mr-1'}
                    onClick={()=>this.removeCount(this.rows.id)}
									> Удалить</button>
									<button
                      onClick={()=>this.addCount(this.rows.id)}
										class={'btn btn-primary mr-1'}
									>Добавить</button>
                </td>
							</tr>
              {
                this.rows.children
								&& this.rows.children.map( rows => {
                  if(this.open){
                    return (
                      <TRComponent rows={rows}/>
                    )
                  }
								})
              }
						</table>
					</td>
				</tr>
			)
      /* {this.rows.children && this.rows.children.map( rows => <TRComponent rows={rows}/>) }*/
    }else {
      return (
        <p>No letters</p>
			)
		}
	}
}
</script>
