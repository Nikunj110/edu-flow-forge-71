import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authLogout } from '../redux/userRelated/userSlice';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, LogOut, X } from 'lucide-react';

const Logout = () => {
  const currentUser = useSelector((state: any) => state.user.currentUser);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authLogout());
    navigate('/');
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary/5 flex items-center justify-center p-4">
      <Card className="max-w-md w-full shadow-xl border-border/50 animate-in fade-in slide-in-from-bottom duration-500">
        <CardHeader className="text-center space-y-4 pb-4">
          <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto">
            <AlertTriangle className="w-8 h-8 text-destructive" />
          </div>
          <div className="space-y-2">
            <CardTitle className="text-2xl">Confirm Logout</CardTitle>
            <CardDescription className="text-base">
              {currentUser?.name && (
                <span className="block font-medium text-foreground mb-2">
                  Hello, {currentUser.name}
                </span>
              )}
              Are you sure you want to log out of your account?
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button
            onClick={handleLogout}
            variant="destructive"
            size="lg"
            className="w-full"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Yes, Log Out
          </Button>
          <Button
            onClick={handleCancel}
            variant="outline"
            size="lg"
            className="w-full border-border hover:bg-muted"
          >
            <X className="w-4 h-4 mr-2" />
            Cancel
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Logout;
