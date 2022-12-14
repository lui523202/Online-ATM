import { useContext, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import {
  getAccountRequests,
  getPinChangeRequests,
} from '../../adapter/adminAdapter';
import { AdminContext } from '../../contexts/AdminContext';
import { AccountRequest, baseUrl } from '../../util/systemConfig';

interface Prop {}

const AdminFeed: React.FC<Prop> = ({}) => {
  const Admin = useContext(AdminContext);
  const navigator = useNavigate();

  useEffect(() => {
    fetchAccountRequests();
    fetchChangePinRequests();
  }, []);

  useEffect(() => {
    navigator('account-creation/');
  }, []);

  const fetchAccountRequests = async () => {
    const requests = await getAccountRequests();
    Admin?.setAccountCreationRequests(requests);
  };

  const fetchChangePinRequests = async () => {
    const requests = await getPinChangeRequests();
    Admin?.setChangePinRequests(requests);
  };

  return (
    <div className="flex flex-col items-center self-start w-full">
      <div className="self-center">
        <span className="phone:text-2xl laptop:text-4xl font-semibold">
          Admin Page
        </span>
      </div>

      <Outlet />
    </div>
  );
};

export default AdminFeed;
