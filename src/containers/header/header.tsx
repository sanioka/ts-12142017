import * as  React from 'react';
// TODO props type ???????
// export type Props = {
//   onSearch: Function;
// }
import './style.css';
// tslint:disable-next-line
export class Header extends React.Component<any> {
  public onChange = ({ target: { value } }: { target: HTMLInputElement }) => {
    this.props.onSearch(value);
  };

  public render(): JSX.Element {
    return (
      <div className='row header'>
        Search: <input type='text' onChange={this.onChange}/>
      </div>
    );
  }
}