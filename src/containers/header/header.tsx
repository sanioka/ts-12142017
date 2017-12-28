import * as  React from 'react';
import { AnyAction } from 'redux';
import './style.css';

export type Props = {
  onSearch:  (value: string) =>  AnyAction;
};
// tslint:disable-next-line
export class Header extends React.Component<Props> {
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