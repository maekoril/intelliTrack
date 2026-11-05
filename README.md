# IntelliTrack

Facial Recognition Attendance and Workstation Presence Monitoring System.

Academic prototype for multi-branch attendance and workstation presence monitoring.

## Current status

React + TypeScript + Vite + Tailwind frontend and a FastAPI backend are initialized. PostgreSQL configuration is provided; database setup and facial recognition are pending. See docs/development.md for startup instructions.

## Agreed scope

- Facial recognition only; fingerprint scanning is excluded.
- Recognize employees at clock-in and monitor their presence through a workstation camera.
- Start a break timer when the employee leaves the camera frame.
- Allow up to one hour for each individual break; reset the timer when the employee returns and is recognized.
- A break exceeding one hour invalidates attendance and marks the employee absent under the proposed prototype rule.
- Retain original clock-in records and detection history to explain attendance decisions.
- Support multiple branches, local offline attendance recording, synchronization, and a central HR dashboard.
- Include leave management, reporting, and attendance-based payroll calculations in the proposed scope; implementation phases remain to be planned.
- Camera presence does not establish whether an employee is actually working.

## Folder structure

- frontend/ - React application.
- backend/ - FastAPI application and API tests.
- docs/ - scope and development instructions.
- compose.yaml - local PostgreSQL service configuration.

## Planning decisions still needed

- Camera and facial recognition approach.
- Branch edge server setup and offline synchronization design.
- First development milestone and feature priorities.
- Recognition failure handling, camera interruptions, shift boundaries, and authorized exceptions.
- Consent, biometric storage, access controls, and data retention.
