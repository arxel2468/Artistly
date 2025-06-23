'use client';

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

// Mock data for the dashboard
const mockSubmissions = [
  { id: 1, name: "John Smith", category: "Singer", city: "Mumbai", fee: "$1000-$2000", status: "Pending" },
  { id: 2, name: "Priya Sharma", category: "Dancer", city: "Delhi", fee: "$800-$1500", status: "Approved" },
  { id: 3, name: "Raj Kapoor", category: "DJ", city: "Bangalore", fee: "$500-$1000", status: "Pending" },
  { id: 4, name: "Ananya Desai", category: "Speaker", city: "Chennai", fee: "$2000-$5000", status: "Rejected" },
  { id: 5, name: "Vikram Singh", category: "Musician", city: "Kolkata", fee: "$1000-$2000", status: "Approved" },
];

export default function DashboardPage() {
  const [submissions, setSubmissions] = useState(mockSubmissions);

  const handleStatusChange = (id: number, newStatus: string) => {
    setSubmissions(prev => 
      prev.map(submission => 
        submission.id === id ? { ...submission, status: newStatus } : submission
      )
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Manager Dashboard</h1>
      <p className="text-gray-600 mb-8">Manage artist submissions and booking requests.</p>
      
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Artist Submissions</h2>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>City</TableHead>
                <TableHead>Fee Range</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {submissions.map((submission) => (
                <TableRow key={submission.id}>
                  <TableCell className="font-medium">{submission.name}</TableCell>
                  <TableCell>{submission.category}</TableCell>
                  <TableCell>{submission.city}</TableCell>
                  <TableCell>{submission.fee}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      submission.status === 'Approved' ? 'bg-green-100 text-green-800' :
                      submission.status === 'Rejected' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {submission.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      {submission.status === 'Pending' && (
                        <>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="bg-green-50 text-green-600 border-green-200 hover:bg-green-100 hover:text-green-700"
                            onClick={() => handleStatusChange(submission.id, 'Approved')}
                          >
                            Approve
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="bg-red-50 text-red-600 border-red-200 hover:bg-red-100 hover:text-red-700"
                            onClick={() => handleStatusChange(submission.id, 'Rejected')}
                          >
                            Reject
                          </Button>
                        </>
                      )}
                      {submission.status !== 'Pending' && (
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleStatusChange(submission.id, 'Pending')}
                        >
                          Reset
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        {submissions.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No submissions found.</p>
          </div>
        )}
      </div>
      
      {/* Additional dashboard sections could go here */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Bookings</h2>
          <p className="text-gray-500">No recent bookings to display.</p>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Analytics</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Total Artists</p>
              <p className="text-2xl font-bold">5</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Pending Approvals</p>
              <p className="text-2xl font-bold">
                {submissions.filter(s => s.status === 'Pending').length}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Approved Artists</p>
              <p className="text-2xl font-bold">
                {submissions.filter(s => s.status === 'Approved').length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
