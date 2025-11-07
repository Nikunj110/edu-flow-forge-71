import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { toast } from 'sonner';

const AddClass = () => {
  const navigate = useNavigate();
  const [className, setClassName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!className.trim()) {
      toast.error('Please enter a class name');
      return;
    }

    setLoading(true);
    // Simulate API call - replace with actual Redux dispatch
    setTimeout(() => {
      toast.success('Class created successfully!');
      navigate('/Admin/classes');
    }, 1000);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-500">
      <Button 
        variant="ghost" 
        onClick={() => navigate('/Admin/classes')}
        className="gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Classes
      </Button>

      <Card className="border-border/50 shadow-lg">
        <CardHeader className="space-y-3">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-center text-2xl">Create New Class</CardTitle>
          <CardDescription className="text-center">
            Add a new class to your school system
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="className">Class Name</Label>
              <Input
                id="className"
                placeholder="e.g., Class 10A, Grade 5B"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                className="h-12"
              />
              <p className="text-sm text-muted-foreground">
                Enter a unique name for the class
              </p>
            </div>

            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate('/Admin/classes')}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={loading}
                className="flex-1 bg-gradient-primary"
              >
                {loading ? 'Creating...' : 'Create Class'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddClass;
