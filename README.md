<div align="center">
  <img src="assets/Frontend-Deployed.png" alt="Wanderlust Showcase" width="100%" style="border-radius: 10px; margin-bottom: 20px; box-shadow: 0 4px 10px rgba(0,0,0,0.15);" />

  # 🌍 Wanderlust Travel Blog ✈️

  ### **A Production-Grade MERN Stack App Driven by a Modern DevSecOps & GitOps Pipeline**

  *Deploying a secure, scalable three-tier stack on Amazon EKS with complete pipeline automation, static analysis, dependency vulnerability scanning, GitOps continuous delivery, and full-stack monitoring.*

  <p align="center">
    <a href="#-tech-stack--devsecops-tools"><img src="https://img.shields.io/badge/Kubernetes-AWS_EKS-FF9900?style=for-the-badge&logo=kubernetes&logoColor=white" alt="AWS EKS" /></a>
    <a href="#4-argocd-installation--configuration"><img src="https://img.shields.io/badge/GitOps-ArgoCD-orange?style=for-the-badge&logo=argo&logoColor=white" alt="ArgoCD" /></a>
    <a href="#3-github-actions-secrets-configuration"><img src="https://img.shields.io/badge/CI%2FCD-GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" alt="GitHub Actions" /></a>
    <a href="#-tech-stack--devsecops-tools"><img src="https://img.shields.io/badge/Security-Trivy_%26_OWASP-blue?style=for-the-badge&logo=securityscorecard&logoColor=white" alt="Security" /></a>
    <a href="#2-sonarqube-server-deployment"><img src="https://img.shields.io/badge/Quality-SonarQube-4E9BCD?style=for-the-badge&logo=sonarqube&logoColor=white" alt="SonarQube" /></a>
  </p>
</div>

---

## 🏗️ System Architecture & Workflow

This project is built around automated CI/CD flow triggering code quality, container builds, GitOps updates, and EKS deployments.

### 🔁 End-to-End Delivery Sequence
```mermaid
sequenceDiagram
    autonumber
    actor Developer
    participant GitHub as GitHub Repository
    participant Actions as GitHub Actions (CI)
    participant SecScan as Security & QA (OWASP/Sonar/Trivy)
    participant Registry as Docker Hub
    participant ArgoCD as ArgoCD (GitOps CD)
    participant EKS as AWS EKS Cluster
    participant Prometheus as Prometheus & Grafana
    participant Gmail as Gmail Notification

    Developer->>GitHub: Push code to main branch
    activate GitHub
    GitHub->>Actions: Trigger CI/CD Pipeline
    deactivate GitHub
    activate Actions
    
    Note over Actions,SecScan: CI Security & Analysis Phase
    Actions->>SecScan: Run OWASP Dependency Check
    SecScan-->>Actions: Report vulnerabilities
    Actions->>SecScan: Run SonarQube Static Code Analysis
    SecScan-->>Actions: Report quality gate results
    Actions->>SecScan: Run Trivy Filesystem Scan
    SecScan-->>Actions: Scan results

    Note over Actions,Registry: Containerization & Push Phase
    Actions->>Actions: Build Docker Images (tagged with Run Number)
    Actions->>SecScan: Scan Docker Images via Trivy
    SecScan-->>Actions: Container vulnerability report
    Actions->>Registry: Authenticate & Push Images
    
    Note over Actions,GitHub: GitOps Manifest Update Phase
    Actions->>GitHub: Update image tags in Kubernetes YAMLs
    Actions->>GitHub: Commit and Push manifest changes to repo
    
    Note over GitHub,ArgoCD: GitOps CD Synchronization Phase
    GitHub-->>ArgoCD: Detect manifest updates (Poll/Webhook)
    activate ArgoCD
    ArgoCD->>EKS: Apply changes & sync target state
    deactivate ArgoCD
    activate EKS
    
    Note over EKS,Prometheus: Monitoring & Analytics
    EKS->>Prometheus: Publish metrics & workload logs
    deactivate EKS
    
    Note over Actions,Gmail: Pipeline Notifications
    Actions->>Gmail: Send build status report (Success/Failure)
    deactivate Actions
```

---

## 🛠️ Tech Stack & DevSecOps Tools

<table width="100%">
  <thead>
    <tr>
      <th width="25%">Layer</th>
      <th width="30%">Tools</th>
      <th width="45%">Role in Architecture</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>Frontend</b></td>
      <td><img src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB" /></td>
      <td>Interactive user interface for the travel blog website.</td>
    </tr>
    <tr>
      <td><b>Backend</b></td>
      <td><img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white" /> <img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white" /></td>
      <td>RESTful API layer handling core business logic & routing.</td>
    </tr>
    <tr>
      <td><b>Database & Cache</b></td>
      <td><img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" /> <img src="https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white" /></td>
      <td>Primary Document DB and high-performance in-memory caching.</td>
    </tr>
    <tr>
      <td><b>Orchestrator</b></td>
      <td><img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=github-actions&logoColor=white" /></td>
      <td>Manages execution of pipeline scans, builds, and automated commits.</td>
    </tr>
    <tr>
      <td><b>Security Scanning</b></td>
      <td><img src="https://img.shields.io/badge/OWASP-000000?style=flat-square&logo=owasp&logoColor=white" /> <img src="https://img.shields.io/badge/Trivy-3E63DD?style=flat-square&logo=trivy&logoColor=white" /></td>
      <td>Third-party libraries dependency analyzer and Docker image scanner.</td>
    </tr>
    <tr>
      <td><b>Code Quality</b></td>
      <td><img src="https://img.shields.io/badge/SonarQube-4E9BCD?style=flat-square&logo=sonarqube&logoColor=white" /></td>
      <td>Static Application Security Testing (SAST) and quality audits.</td>
    </tr>
    <tr>
      <td><b>GitOps CD</b></td>
      <td><img src="https://img.shields.io/badge/ArgoCD-F3F4F6?style=flat-square&logo=argo&logoColor=orange" /></td>
      <td>Declarative GitOps engine syncing K8s configurations automatically.</td>
    </tr>
    <tr>
      <td><b>Cloud Kubernetes</b></td>
      <td><img src="https://img.shields.io/badge/AWS_EKS-FF9900?style=flat-square&logo=amazon-aws&logoColor=white" /></td>
      <td>Managed highly available cluster to host Wanderlust workloads.</td>
    </tr>
    <tr>
      <td><b>Monitoring</b></td>
      <td><img src="https://img.shields.io/badge/Prometheus-E6522C?style=flat-square&logo=prometheus&logoColor=white" /> <img src="https://img.shields.io/badge/Grafana-F46800?style=flat-square&logo=grafana&logoColor=white" /></td>
      <td>Real-time cluster metrics, performance panels, and alerts.</td>
    </tr>
    <tr>
      <td><b>Email Broker</b></td>
      <td><img src="https://img.shields.io/badge/Gmail-D14836?style=flat-square&logo=gmail&logoColor=white" /></td>
      <td>Delivers build notifications to subscribers on job status changes.</td>
    </tr>
  </tbody>
</table>

---

## 🚀 Navigation & Setup Sections

> [!TIP]
> Click any section below to navigate directly to the detailed configuration guide.

* [1. AWS Infrastructure Setup (EKS)](#1-aws-infrastructure-setup-eks)
* [2. SonarQube Server Deployment](#2-sonarqube-server-deployment)
* [3. GitHub Actions Secrets Configuration](#3-github-actions-secrets-configuration)
* [4. ArgoCD Installation & Configuration](#4-argocd-installation--configuration)
* [5. Prometheus & Grafana Monitoring Setup](#5-prometheus--grafana-monitoring-setup)
* [6. Gmail Notifications Configuration](#6-gmail-notifications-configuration)
* [7. Clean Up Instructions](#7-clean-up-instructions)
* [8. Showcase Gallery](#8-showcase-gallery)

---

## 1. AWS Infrastructure Setup (EKS)

Configure your CLI environment and provision a managed AWS EKS cluster.

### AWS CLI Configuration
Download and install the AWS CLI:
```bash
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
sudo apt install unzip -y
unzip awscliv2.zip
sudo ./aws/install
aws configure
```

### Install kubectl (Kubernetes CLI)
```bash
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
chmod +x ./kubectl
sudo mv ./kubectl /usr/local/bin/
kubectl version --client
```

### Install eksctl (EKS Provisioning CLI)
```bash
curl --silent --location "https://github.com/weaveworks/eksctl/releases/latest/download/eksctl_$(uname -s)_amd64.tar.gz" | tar xz -C /tmp
sudo mv /tmp/eksctl /usr/local/bin
eksctl version
```

### Provision AWS EKS Cluster
Execute these commands to bootstrap the cluster. Note that nodegroups will launch with `t2.large` nodes to handle database, caching, frontend, backend, and monitoring pods.
```bash
# 1. Create EKS Control Plane
eksctl create cluster --name=wanderlust \
                      --region=us-west-1 \
                      --version=1.30 \
                      --without-nodegroup

# 2. Associate IAM OIDC Provider for Service Accounts
eksctl utils associate-iam-oidc-provider \
    --region us-west-1 \
    --cluster wanderlust \
    --approve

# 3. Create Node Group
eksctl create nodegroup --cluster=wanderlust \
                       --region=us-west-1 \
                       --name=wanderlust-nodes \
                       --node-type=t2.large \
                       --nodes=2 \
                       --nodes-min=2 \
                       --nodes-max=3 \
                       --node-volume-size=30 \
                       --asg-access \
                       --external-dns-access
```

---

## 2. SonarQube Server Deployment

You can host SonarQube as a Docker container on an EC2 instance or run it on a cloud instance.

To launch a SonarQube server locally or on your master instance:
```bash
docker run -d --name SonarQube-Server -p 9000:9000 -d sonarqube:lts-community
```
Access the server at `http://<your-ip>:9000`. Navigate to **Administration ➔ Security ➔ Users ➔ Tokens** to generate a token for authentication in the GitHub Action.

---

## 3. GitHub Actions Secrets Configuration

To run the CI/CD pipeline, the GitHub repository needs specific secrets configured under **Settings ➔ Secrets and Variables ➔ Actions**.

Ensure you define the following secrets:

| Secret Name | Description | Example |
| :--- | :--- | :--- |
| `DOCKER_USERNAME` | Docker Hub username. | `yourusername` |
| `DOCKER_PASSWORD` | Docker Hub password/access token. | `dckr_pat_...` |
| `SONAR_TOKEN` | Generated token from your SonarCloud/SonarQube account. | `sqa_...` |
| `MAIL_USERNAME` | Gmail account used to send build status alerts. | `your-email@gmail.com` |
| `MAIL_PASSWORD` | Generated Gmail App Password. | `xxxx xxxx xxxx xxxx` |
| `MAIL_TO` | Target recipient email address. | `recipient@gmail.com` |

---

## 4. ArgoCD Installation & Configuration

Deploy ArgoCD onto the newly provisioned Kubernetes cluster for declarative CD.

### Install ArgoCD Server
```bash
# Create namespace
kubectl create namespace argocd

# Apply installation manifest
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

# Monitor deployment progress
kubectl get pods -n argocd --watch
```

### Expose ArgoCD Server UI via NodePort
```bash
kubectl patch svc argocd-server -n argocd -p '{"spec": {"type": "NodePort"}}'
```
Locate the NodePort assigned:
```bash
kubectl get svc argocd-server -n argocd
```

### Retrieve Initial Admin Password
```bash
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d; echo
```
Log in via your browser using the username `admin` and the retrieved password. We recommend updating your password immediately under user configuration.

### Register EKS Cluster in ArgoCD CLI
Install the ArgoCD CLI tool:
```bash
sudo curl --silent --location -o /usr/local/bin/argocd https://github.com/argoproj/argo-cd/releases/download/v2.4.7/argocd-linux-amd64
sudo chmod +x /usr/local/bin/argocd

# Login to your ArgoCD Server
argocd login <node-ip>:<node-port> --username admin

# Add Cluster context
argocd cluster add $(kubectl config current-context) --name wanderlust-cluster
```

---

## 5. Prometheus & Grafana Monitoring Setup

Deploy the Prometheus operator stack via Helm to collect logs and visualize cluster resources.

### Install Helm Package Manager
```bash
curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3
chmod 700 get_helm.sh
./get_helm.sh
```

### Configure Prometheus Community Repository & Namespace
```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
kubectl create namespace prometheus
```

### Install Monitoring Stack
```bash
helm install prometheus-stack prometheus-community/kube-prometheus-stack -n prometheus
```

### Expose Dashboards via NodePort
Expose the Prometheus and Grafana dashboards to clean, accessible ports on your node:
```bash
kubectl patch svc prometheus-stack-kube-prom-prometheus -n prometheus -p '{"spec": {"type": "NodePort"}}'
kubectl patch svc prometheus-stack-grafana -n prometheus -p '{"spec": {"type": "NodePort"}}'
```

### Get Grafana Admin Password
```bash
kubectl get secret --namespace prometheus prometheus-stack-grafana -o jsonpath="{.data.admin-password}" | base64 --decode ; echo
```
Access Grafana in the browser at `http://<node-ip>:<grafana-nodeport>` using username `admin` and the decoded password.

---

## 6. Gmail Notifications Configuration

Configure GitHub Actions to send detailed pipeline alerts to your inbox on every build.

### 🔑 Set Up Gmail App Password
1. Navigate to your Google Account Settings.
2. Turn on **2-Step Verification** (Mandatory).
3. Search for **App Passwords**.
4. Generate a new App Password with a custom name like `GitHub Actions Wanderlust`.
5. Copy the generated 16-character password and save it as `MAIL_PASSWORD` in your GitHub repository Secrets.

### 📝 Integration in GitHub Actions Workflow
In your `.github/workflows/ci.yml` pipeline, add the notification step to email results on failure or success:
```yaml
      # Email Notification Step
      - name: Send Email Notification
        uses: dawidd6/action-send-mail@v3
        if: always() # Trigger notifications on all outcomes
        with:
          server_address: smtp.gmail.com
          server_port: 465
          username: ${{ secrets.MAIL_USERNAME }}
          password: ${{ secrets.MAIL_PASSWORD }}
          subject: 'Wanderlust Build Report: ${{ job.status }}'
          to: ${{ secrets.MAIL_TO }}
          from: 'Wanderlust CI/CD Workflow'
          body: |
            Wanderlust CI/CD pipeline run finished with status: ${{ job.status }}.
            
            - Commit: ${{ github.sha }}
            - Actor: ${{ github.actor }}
            - Workflow Run Details: https://github.com/${{ github.repository }}/actions/runs/${{ github.run_id }}
```

---

## 7. Clean Up Instructions

To avoid unexpected charges, terminate all provisioned AWS cloud resources once testing is complete:

```bash
# Terminate nodegroups and control plane
eksctl delete cluster --name=wanderlust --region=us-west-1
```

---

## 8. Showcase Gallery

Here is a visual breakdown of the running components, security analysis, and GitOps deployments.

<table width="100%">
  <tr>
    <td width="50%" align="center">
      <b>🚀 CI Pipeline - Build & Test (GitHub Actions)</b>
      <br/><br/>
      <img src="assets/GitHub-Actions-1.png" width="100%" style="border-radius: 6px; box-shadow: 0 2px 5px rgba(0,0,0,0.15);" />
    </td>
    <td width="50%" align="center">
      <b>🚀 CI Pipeline - Push & Bridge (GitHub Actions)</b>
      <br/><br/>
      <img src="assets/GitHub-Actions-2.png" width="100%" style="border-radius: 6px; box-shadow: 0 2px 5px rgba(0,0,0,0.15);" />
    </td>
  </tr>
  <tr>
    <td width="50%" align="center">
      <b>🛡️ Static Code Analysis (SonarQube)</b>
      <br/><br/>
      <img src="assets/SonarQube.png" width="100%" style="border-radius: 6px; box-shadow: 0 2px 5px rgba(0,0,0,0.15);" />
    </td>
    <td width="50%" align="center">
      <b>📦 Container Registry (Docker Hub)</b>
      <br/><br/>
      <img src="assets/DockerHub.png" width="100%" style="border-radius: 6px; box-shadow: 0 2px 5px rgba(0,0,0,0.15);" />
    </td>
  </tr>
  <tr>
    <td width="50%" align="center">
      <b>🔄 GitOps Sync - Overview (ArgoCD)</b>
      <br/><br/>
      <img src="assets/AgroCD-1.png" width="100%" style="border-radius: 6px; box-shadow: 0 2px 5px rgba(0,0,0,0.15);" />
    </td>
    <td width="50%" align="center">
      <b>🔄 GitOps Sync - Details (ArgoCD)</b>
      <br/><br/>
      <img src="assets/AgroCD-2.png" width="100%" style="border-radius: 6px; box-shadow: 0 2px 5px rgba(0,0,0,0.15);" />
    </td>
  </tr>
  <tr>
    <td width="50%" align="center">
      <b>🖥️ Workloads Terminal Monitor (K9s CLI)</b>
      <br/><br/>
      <img src="assets/K9-Terminal.png" width="100%" style="border-radius: 6px; box-shadow: 0 2px 5px rgba(0,0,0,0.15);" />
    </td>
    <td width="50%" align="center">
      <b>🌍 Deployed Frontend Application</b>
      <br/><br/>
      <img src="assets/Frontend-Deployed.png" width="100%" style="border-radius: 6px; box-shadow: 0 2px 5px rgba(0,0,0,0.15);" />
    </td>
  </tr>
</table>
