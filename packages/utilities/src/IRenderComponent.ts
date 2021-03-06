/**
 * An interface representing a component that will not output any DOM, will just render its children and
 * pass through items to modify the children.
 */
export interface IRenderComponent<TProps> {
  /**
   * JSX.Element to return in this component's render() function.
   *
   * @type {JSX.Element}
   */
  children: (props: TProps) => JSX.Element;
}