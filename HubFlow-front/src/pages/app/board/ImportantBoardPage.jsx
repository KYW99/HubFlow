import BoardAside from "../../../components/app/board/BoardAside";
import ImportantBoard from "../../../components/app/board/ImportantBoard";
import { useSidebar } from "../../../hooks/app/UseSidebar";
import AppLayout from "../../../layouts/app/AppLayout";

import "../../../styles/app/board/Board.scss";
import "../../../styles/app/board/BoardAside.scss";

export default function ImportantBoardPage() {
    const { isSidebarVisible, toggleSidebar } = useSidebar(); // 사이드바 상태 및 토글 함수 사용
  
    return (
      <AppLayout onToggleSidebar={toggleSidebar}>
        <BoardAside isVisible={isSidebarVisible} />
        <main
          className={`main-content ${isSidebarVisible ? "" : "hidden-sidebar"} scrollable`}
        >
          <ImportantBoard />
        </main>
      </AppLayout>
    );
  }
  