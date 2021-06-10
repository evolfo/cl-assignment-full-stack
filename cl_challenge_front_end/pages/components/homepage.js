import { useEffect, useState } from "react"
import { wretchHelper } from '../../utils/wretchHelper'
import { Card, Image } from 'semantic-ui-react'

const HomePage = () => {
    const [folders, setFolders] = useState([])
    const [projects, setProjects] = useState([])
    const [topics, setTopics] = useState([])
    const [doRenderFilteredProjects, setDoRenderFilteredProjets] = useState(false)
    const [filteredProjects, setFilteredProjects] = useState([])

    useEffect(() => {
        wretchHelper
            .url('folders')
            .get()
            .notFound(error => { /* ... */ })
            .unauthorized(error => { /* ... */ })
            .json(folderResp => {
                setFolders(folderResp)
            })
            .catch(error => { /* uncaught errors */ })

        wretchHelper
            .url('projects')
            .get()
            .notFound(error => { /* ... */ })
            .unauthorized(error => { /* ... */ })
            .json(projectsResp => {
                setProjects(projectsResp)
            })
            .catch(error => { /* uncaught errors */ })

        wretchHelper
            .url('topics')
            .get()
            .notFound(error => { /* ... */ })
            .unauthorized(error => { /* ... */ })
            .json(topicsResp => {
                setTopics(topicsResp)
            })
            .catch(error => { /* uncaught errors */ })
    }, [])

    const renderFolders = () => {
        return folders.map(folder => {
            if (typeof(folder.parent_folder_id) !== 'number') {
                return (
                    <Card
                        image='folder.png'
                        link
                        header={folder.title}
                        meta={folder.started}
                        description={folder.description}
                    />
                )
            }
        })
    }

    const renderProjects = () => {
        return projects.map(project => {
            const extra = (
                <p>
                    Cost: {project.cost} 
                    <br />
                    <span>{project.display_topics.join(" ")}</span>
                </p>
            )
            if (typeof(project.folder_id) !== 'number') {
                return (
                    <Card
                        link
                        header={project.title}
                        meta={project.started}
                        description={project.description}
                        extra={extra}
                    />
                )
            }
        })
    }

    const renderFilteredProjects = () => {
        console.log(filteredProjects)

        return filteredProjects?.map(project => {
            const extra = (
                <p>
                    Cost: {project.cost} 
                    <br />
                    <span>{project.display_topics.join(" ")}</span>
                </p>
            )
            if (typeof(project.folder_id) !== 'number') {
                return (
                    <Card
                        link
                        header={project.title}
                        meta={project.started}
                        description={project.description}
                        extra={extra}
                    />
                )
            }
        })
    }

    const renderTopics = () => {
        return topics.map(topic => {
            return (<option value={topic.title}>{topic.title}</option>)
        })
    }

    const filterProjectsByTopic = (e) => {
        setDoRenderFilteredProjets(true)

        let foundTopic = topics.find(topic => {
            return topic.title === e.target.value
        })

        setFilteredProjects(foundTopic?.projects)
    }

    return (
        <div className="main-container">
            <p>Filter the projects by topic:</p>
            <select onChange={filterProjectsByTopic} name="topics" id="topics">
                {renderTopics()}
            </select>
            <div className="content-container">
                {renderFolders()}
                {doRenderFilteredProjects ? renderFilteredProjects() : renderProjects()}
            </div>
        </div>
    )
}

export default HomePage