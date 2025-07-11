import { Button } from "antd"

export function PrimaryButton(props) {
  return (
    <Button
      className="primary-button"
      color="primary"
      variant="solid"
      type="primary"
      size = {props.size}
      shape= "default"
      icon= {props.icon}
      // iconPosition= {"start" || "end"}
      disabled={props.disabled || false}
      // loading={props.loading || false} ::: {delay: number icon: React.ReactNode}
      // ghost= {props.ghost || false}
      // danger= {props.danger || false}
      // block= {props.block || false}
      // href= {props.href || ""}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  )
}