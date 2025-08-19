import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Download, 
  FileText, 
  Image, 
  BookOpen, 
  Calendar, 
  Info,
  ExternalLink,
  Clock,
  Eye
} from "lucide-react";

const Downloads = () => {
  const admissionForms = [
    {
      title: "Admission Application Form 2024-25",
      description: "Complete application form for new admissions",
      fileType: "PDF",
      fileSize: "2.5 MB",
      lastUpdated: "March 1, 2024",
      downloadUrl: "#",
      category: "admission"
    },
    {
      title: "Hostel Admission Form",
      description: "Separate application form for hostel facilities",
      fileType: "PDF",
      fileSize: "1.8 MB",
      lastUpdated: "March 1, 2024",
      downloadUrl: "#",
      category: "admission"
    },
    {
      title: "Fee Structure 2024-25",
      description: "Detailed fee structure for all classes and hostel",
      fileType: "PDF",
      fileSize: "1.2 MB",
      lastUpdated: "February 28, 2024",
      downloadUrl: "#",
      category: "admission"
    },
    {
      title: "Document Checklist",
      description: "List of required documents for admission",
      fileType: "PDF",
      fileSize: "800 KB",
      lastUpdated: "March 1, 2024",
      downloadUrl: "#",
      category: "admission"
    }
  ];

  const academicDocuments = [
    {
      title: "Academic Calendar 2024-25",
      description: "Complete academic year schedule and important dates",
      fileType: "PDF",
      fileSize: "1.5 MB",
      lastUpdated: "April 1, 2024",
      downloadUrl: "#",
      category: "academic"
    },
    {
      title: "Curriculum Overview",
      description: "Detailed curriculum for all classes and subjects",
      fileType: "PDF",
      fileSize: "3.2 MB",
      lastUpdated: "March 15, 2024",
      downloadUrl: "#",
      category: "academic"
    },
    {
      title: "Examination Schedule",
      description: "Annual examination timetable and important instructions",
      fileType: "PDF",
      fileSize: "1.1 MB",
      lastUpdated: "February 20, 2024",
      downloadUrl: "#",
      category: "academic"
    },
    {
      title: "Board Affiliation Certificate",
      description: "Official affiliation certificate from UP Madarsa Board",
      fileType: "PDF",
      fileSize: "2.0 MB",
      lastUpdated: "January 15, 2024",
      downloadUrl: "#",
      category: "academic"
    }
  ];

  const schoolInformation = [
    {
      title: "School Prospectus 2024-25",
      description: "Comprehensive guide about school facilities and programs",
      fileType: "PDF",
      fileSize: "8.5 MB",
      lastUpdated: "March 10, 2024",
      downloadUrl: "#",
      category: "info"
    },
    {
      title: "School Rules & Regulations",
      description: "Student handbook with policies and guidelines",
      fileType: "PDF",
      fileSize: "2.8 MB",
      lastUpdated: "April 1, 2024",
      downloadUrl: "#",
      category: "info"
    },
    {
      title: "Hostel Rules & Guidelines",
      description: "Rules and regulations for hostel students",
      fileType: "PDF",
      fileSize: "1.9 MB",
      lastUpdated: "March 20, 2024",
      downloadUrl: "#",
      category: "info"
    },
    {
      title: "Transport Routes & Timings",
      description: "School bus routes and pickup/drop timings",
      fileType: "PDF",
      fileSize: "1.3 MB",
      lastUpdated: "March 25, 2024",
      downloadUrl: "#",
      category: "info"
    }
  ];

  const notices = [
    {
      title: "Annual Day 2024 Notice",
      description: "Important notice regarding Annual Day celebration",
      fileType: "PDF",
      fileSize: "650 KB",
      lastUpdated: "February 15, 2024",
      downloadUrl: "#",
      category: "notice",
      isNew: true
    },
    {
      title: "Sports Day Competition Notice",
      description: "Notice for upcoming sports day events and registration",
      fileType: "PDF",
      fileSize: "720 KB",
      lastUpdated: "March 5, 2024",
      downloadUrl: "#",
      category: "notice",
      isNew: true
    },
    {
      title: "Parent-Teacher Meeting Schedule",
      description: "Schedule for upcoming parent-teacher meetings",
      fileType: "PDF",
      fileSize: "580 KB",
      lastUpdated: "February 28, 2024",
      downloadUrl: "#",
      category: "notice"
    }
  ];

  const getFileIcon = (fileType) => {
    switch(fileType.toLowerCase()) {
      case 'pdf':
        return <FileText className="h-6 w-6 text-red-600" />;
      case 'jpg':
      case 'png':
        return <Image className="h-6 w-6 text-blue-600" />;
      default:
        return <FileText className="h-6 w-6 text-gray-600" />;
    }
  };

  const DownloadSection = ({ title, description, documents, bgColor = "bg-background" }) => (
    <section className={`py-16 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">{title}</h2>
          {description && <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    {getFileIcon(doc.fileType)}
                    <div className="ml-3">
                      <Badge variant="outline" className="text-xs">
                        {doc.fileType}
                      </Badge>
                      {doc.isNew && (
                        <Badge className="ml-2 bg-green-600 text-white text-xs">
                          NEW
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight">{doc.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{doc.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Updated: {doc.lastUpdated}</span>
                  </div>
                  <div className="flex items-center">
                    <Info className="h-4 w-4 mr-2" />
                    <span>Size: {doc.fileSize}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-forest-green hover:bg-earth-brown"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-forest-green to-earth-brown text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Downloads
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Access important documents, forms, notices, and information materials. 
              All resources are available for easy download.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-6 py-2">
                <FileText className="h-4 w-4 mr-2" />
                Admission Forms
              </Badge>
              <Badge variant="secondary" className="text-lg px-6 py-2">
                <BookOpen className="h-4 w-4 mr-2" />
                Academic Documents
              </Badge>
              <Badge variant="secondary" className="text-lg px-6 py-2">
                <Calendar className="h-4 w-4 mr-2" />
                Notices & Updates
              </Badge>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-forest-green mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Documents Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-forest-green mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Access Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-forest-green mb-1">Free</div>
                <div className="text-sm text-muted-foreground">All Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-forest-green mb-1">Updated</div>
                <div className="text-sm text-muted-foreground">Regular Updates</div>
              </div>
            </div>
          </div>
        </section>

        {/* Admission Forms */}
        <DownloadSection 
          title="Admission Forms & Documents"
          description="All necessary forms and documents required for the admission process"
          documents={admissionForms}
        />

        {/* Academic Documents */}
        <DownloadSection 
          title="Academic Documents"
          description="Academic calendar, curriculum details, and examination information"
          documents={academicDocuments}
          bgColor="bg-muted/30"
        />

        {/* School Information */}
        <DownloadSection 
          title="School Information"
          description="Comprehensive information about school facilities, rules, and guidelines"
          documents={schoolInformation}
        />

        {/* Notices & Updates */}
        <DownloadSection 
          title="Notices & Updates"
          description="Latest notices, announcements, and important updates"
          documents={notices}
          bgColor="bg-muted/30"
        />

        {/* Download Instructions */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Download Instructions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold mb-4">How to Download:</h3>
                      <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                        <li>Click on the "Download" button for your desired document</li>
                        <li>The file will start downloading automatically</li>
                        <li>Check your Downloads folder for the file</li>
                        <li>Use PDF reader to open PDF files</li>
                      </ol>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-4">Technical Requirements:</h3>
                      <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                        <li>PDF Reader (Adobe Acrobat, Browser built-in)</li>
                        <li>Stable internet connection</li>
                        <li>Sufficient storage space</li>
                        <li>Updated web browser</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-muted/50 rounded-md">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> If you face any issues downloading documents, please contact our office at 
                      <strong> 9480041361</strong> or email us at <strong>mdbschool23@gmail.com</strong>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Help & Support */}
        <section className="py-16 bg-gradient-to-r from-forest-green to-earth-brown text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
            <p className="text-xl mb-8 opacity-90">
              Can't find what you're looking for? Our team is here to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-forest-green hover:bg-gray-100">
                <ExternalLink className="h-4 w-4 mr-2" />
                Contact Support
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-forest-green">
                <FileText className="h-4 w-4 mr-2" />
                Request Document
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Downloads;