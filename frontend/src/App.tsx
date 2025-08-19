import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, useLocation, Navigate, Outlet } from "react-router-dom";
import api from "@/lib/axios";

import Index from "./pages/Index";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import Facilities from "./pages/Facilities";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Downloads from "./pages/Downloads";
import WorkAtOurSchool from "./pages/WorkAtOurSchool";
import News from "./components/News";

import DuplicateMarksheet from "./pages/student-services/DuplicateMarksheet";
import TranscriptMarks from "./pages/student-services/TranscriptMarks";
import Migration from "./pages/student-services/Migration";
import Misc from "./pages/student-services/MiscApplicationForms";
import ProvisionalCertificate from "./pages/student-services/ProvisionalCertificate";
import ContinuationReadmissionExamForm from "./pages/student-services/ContinuationReadmissionExamForm";
import BooksManuals from "./pages/student-services/BooksManuals";
import OrdinancesAcademic from "./pages/student-services/OrdinancesAcademic";
import StudentsConductDiscipline from "./pages/student-services/StudentsConductDiscipline";
import ExamUnfairMeansRegulations from "./pages/student-services/ExamUnfairMeansRegulations";
import Convocation from "./pages/student-services/Convocation";
import PictureGallery from "./pages/student-services/PictureGallery";

import Faculty from "./pages/faculty";
import SchoolAdmission from "./pages/school/schooladmission";
import SchoolExamination from "./pages/school/schoolexamination";

import Login from "./pages/login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

interface User {
  loggedIn: boolean;
  username: string;
  role: "student" | "teacher" | "admin";
}

const ProtectedRoute = ({ user }: { user: User | null }) => {
  if (!user) return <Navigate to="/login" replace />;
  return <Outlet />;
};

const queryClient = new QueryClient();

const App = () => {
  const [user, setUser] = useState<User | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setChecking(false);
      return;
    }
    api
      .get<User>("/user")
      .then((res) => setUser(res.data))
      .catch(() => {
        localStorage.removeItem("token");
        setUser(null);
      })
      .finally(() => setChecking(false));
  }, []);

  if (checking) return <div style={{ padding: 24 }}>Loading…</div>;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ScrollToTop />
        <Header user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/work-at-our-school" element={<WorkAtOurSchool />} />

          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />

          <Route element={<ProtectedRoute user={user} />}>
            <Route
              path="/student-services/duplicate-marksheet"
              element={<DuplicateMarksheet />}
            />
            <Route
              path="/student-services/transcript-marks"
              element={<TranscriptMarks />}
            />
            <Route path="/student-services/migration" element={<Migration />} />
            <Route
              path="/student-services/provisional-certificate"
              element={<ProvisionalCertificate />}
            />
            <Route
              path="/student-services/continuation-readmission-exam-form"
              element={<ContinuationReadmissionExamForm />}
            />
            <Route
              path="/student-services/books-manuals"
              element={<BooksManuals />}
            />
            <Route
              path="/student-services/ordinances-academic"
              element={<OrdinancesAcademic />}
            />
            <Route
              path="/student-services/students-conduct-discipline"
              element={<StudentsConductDiscipline />}
            />
            <Route
              path="/student-services/exam-unfair-means-regulations"
              element={<ExamUnfairMeansRegulations />}
            />
            <Route
              path="/student-services/convocation"
              element={<Convocation />}
            />
            <Route
              path="/student-services/picture-gallery"
              element={<PictureGallery />}
            />
            <Route
              path="/student-services/misc-application-forms"
              element={<Misc />}
            />

            <Route path="/faculty" element={<Faculty />} />
            <Route path="/school/admission" element={<SchoolAdmission />} />
            <Route path="/school/examination" element={<SchoolExamination />} />
            <Route
              path="/dashboard"
              element={<Dashboard user={user} setUser={setUser} />}
            />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
