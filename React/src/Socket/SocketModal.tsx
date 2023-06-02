import { StartGameModal, useStartGame } from '../Socket/StartGameModal';
import { InviteFailModal, useInviteFail } from '../Socket/InviteFailedModal';
import { InviteGameModal, useInviteGame } from '../Socket/InviteGameModal';

export function SocketModalContainer({socket}) {

  const { showInvite, closeInvite, inviteData } = useInviteGame(socket);
  const { showStart, closeStart, startData } = useStartGame(socket);
  const { showInviteFail, closeInviteFail, inviteFailData } = useInviteFail(socket);

  return (
    <>
      {showInvite && (
        <div className="invite-modal-overlay">
          <InviteGameModal
            onClose={closeInvite}
            socket={socket}
            inviteData={inviteData}
          />
        </div>
      )}
      {showStart && (
        <div className="startgame-modal-overlay">
          <StartGameModal onClose={closeStart} data={startData} />
        </div>
      )}
      {showInviteFail && (
        <div className="invite-fail-overlay">
          <InviteFailModal
            onClose={closeInviteFail}
            inviteFailData={inviteFailData}
          />
        </div>
      )}
    </>
  );
}