import react from "react";
import "./PageHeader.scss";
import ArrowBack from "../../assets/icons/back-arrow.svg";
import { NullFunction, NullComponent } from "../NullComponent/NullComponent";

export const PageHeader = ({
  onNavigateBack = NullFunction,
  title = "",
  pageActionsComponent = NullComponent,
  children = NullComponent,
}) => {
  return (
    <div className="page-header">
      <div className="page-header__container">
        <div className="page-header__container_header">
          {onNavigateBack !== NullFunction && (
            <div
              className="page-header__navigate-back"
              onClick={onNavigateBack}
            >
              <img src={ArrowBack} alt="an arrow to navigate back" />
            </div>
          )}
          <div className="page-header__title">
            <h1>{title}</h1>
          </div>
          {pageActionsComponent !== NullComponent && (
            <div className="page-header__actions">{pageActionsComponent()}</div>
          )}
        </div>
        {children !== NullComponent && (
          <div className="page-header__container-content">{children}</div>
        )}
      </div>
    </div>
  );
};
