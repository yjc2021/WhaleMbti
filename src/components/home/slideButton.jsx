import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
export default function SlideButton({ direction, onClick }) {
  return (
    <button onClick={onClick} className={`btn-slide-control btn-${direction}`}>
      <FontAwesomeIcon icon={solid("chevron-right")} />
    </button>
  );
}
