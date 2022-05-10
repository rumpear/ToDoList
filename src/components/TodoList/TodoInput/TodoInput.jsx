import { PureComponent } from 'react';

export class TodoInput extends PureComponent {
  state = {
    text: '',
  };

  onInputChange = e => {
    // console.log(e.currentTarget.value);

    this.setState({ text: e.currentTarget.value });
  };

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.text) return;

    this.props.addTodoText(this.state.text);
    this.reset();
  };

  reset = () => this.setState({ text: '' });

  render() {
    const { onSubmit, onInputChange } = this;
    const { text } = this.state;

    return (
      <form class="modal-form" onSubmit={onSubmit}>
        <div class="modal-form__field" role="group">
          <label class="modal-form__label" htmlFor={1}>
            Имя
          </label>
          <span class="modal-form__wrap">
            <input
              class="modal-form__input"
              type="text"
              name="userName"
              id={1}
              onChange={onInputChange}
              value={text}
            />
          </span>
        </div>
      </form>
    );
  }
}
