import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface StudentAttendanceProps {
  situation?: string;
}

const StudentAttendance = ({ situation }: StudentAttendanceProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  const [status, setStatus] = useState('Present');
  const [date, setDate] = useState<Date>(new Date());

  const studentID = params.studentID;
  const subjectID = params.subjectID;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const fields = {
      subName: subjectID,
      status,
      date: date.toISOString(),
    };

    // TODO: Implement actual API call
    console.log('Mark Attendance:', { studentID, fields });

    toast({
      title: 'Success',
      description: 'Attendance marked successfully',
    });

    navigate(-1);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Mark Attendance</h1>
          <p className="text-muted-foreground mt-1">Record student attendance</p>
        </div>
        <Button variant="outline" onClick={() => navigate(-1)}>
          Back
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Attendance Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label>Select Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      'w-full justify-start text-left font-normal',
                      !date && 'text-muted-foreground'
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, 'PPP') : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={date} onSelect={(d) => d && setDate(d)} initialFocus />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label>Attendance Status</Label>
              <RadioGroup value={status} onValueChange={setStatus}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Present" id="present" />
                  <Label htmlFor="present" className="cursor-pointer">
                    Present
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Absent" id="absent" />
                  <Label htmlFor="absent" className="cursor-pointer">
                    Absent
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="flex gap-2">
              <Button type="submit">Submit Attendance</Button>
              <Button type="button" variant="outline" onClick={() => navigate(-1)}>
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentAttendance;
